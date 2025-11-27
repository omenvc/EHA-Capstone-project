"use client";

import { Mic, SendHorizonal, StopCircle, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type VoiceRecorderProps = {
  onSend: (audioBlob: Blob) => void;
};

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ onSend }) => {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (recording) {
      const id = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
    else if (!recording && intervalId) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId)
        clearInterval(intervalId);
    };
  }, [recording]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => {
        setAudioChunks(prev => [...prev, e.data]);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setShowPlayer(true);
        setAudioChunks([]);
      };

      recorder.start();
      mediaStreamRef.current = stream;
      setMediaRecorder(recorder);
      setRecording(true);
      setTimer(0);
    }
    catch (error) {
      console.error("Microphone access denied or error:", error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      mediaStreamRef.current?.getTracks().forEach(track => track.stop());
      setRecording(false);
    }
  };

  const handleCancel = () => {
    setAudioUrl(null);
    setShowPlayer(false);
    setTimer(0);
    setAudioChunks([]);
  };

  const handleSend = () => {
    if (audioChunks.length === 0 && audioUrl) {
      fetch(audioUrl)
        .then(res => res.blob())
        .then((blob) => {
          onSend(blob);
          handleCancel();
        });
    }
    else if (audioChunks.length > 0) {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      onSend(audioBlob);
      handleCancel();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {!recording && !showPlayer && (
        <button
          onClick={handleStartRecording}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <Mic size={20} />
        </button>
      )}

      {recording && (
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-semibold">
            ● Recording
            {formatTime(timer)}
          </span>
          <button
            onClick={handleStopRecording}
            className="p-2 bg-red-100 rounded-full hover:bg-red-200"
          >
            <StopCircle size={20} />
          </button>
        </div>
      )}

      {showPlayer && audioUrl && (
        <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 rounded">
          <audio controls src={audioUrl} className="max-w-xs" />
          <button
            onClick={handleSend}
            className="text-blue-600 hover:text-blue-800"
            title="Send"
          >
            <SendHorizonal size={20} />
          </button>
          <button
            onClick={handleCancel}
            className="text-gray-500 hover:text-gray-700"
            title="Cancel"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
