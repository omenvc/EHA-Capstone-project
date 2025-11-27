import EmojiPicker from "emoji-picker-react";
import { Paperclip, SendHorizonal, X } from "lucide-react";
import React, { useRef, useState } from "react";

import { VoiceRecorder } from "./voice-recorder";

type ChatInputProps = {
  onSendText: (text: string) => void;
  onSendFile: (file: File) => void;
  onSendAudio: (audio: Blob) => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendText,
  onSendFile,
  onSendAudio,
}) => {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendText = () => {
    if (message.trim()) {
      onSendText(message.trim());
      setMessage("");
    }
  };

  const handleEmojiClick = (emojiData: any) => {
    setMessage(prev => prev + emojiData.emoji);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onSendFile(file);
      e.target.value = "";
    }
  };

  return (
    <div className="w-full p-3 bg-white sticky bottom-0 z-10">

      {selectedFile && (
        <div className="flex items-center justify-between bg-gray-100 rounded p-2 mb-2">
          <div className="text-sm truncate max-w-[80%]">
            <span className="font-medium">{selectedFile.name}</span>
            {" "}
            •
            {(selectedFile.size / 1024).toFixed(1)}
            {" "}
            KB
          </div>
          <button
            onClick={() => setSelectedFile(null)}
            className="text-gray-500 hover:text-gray-800"
            title="Remove file"
          >
            <X size={18} />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Attach File */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          title="Attach file"
        >
          <Paperclip size={20} />
        </button>
        <input
          type="file"
          accept="image/*,application/pdf,audio/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Voice Recorder */}
        <VoiceRecorder onSend={onSendAudio} />

        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          className="text-gray-500 text-xl"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <div className="absolute bottom-16 left-2 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} height={350} width={280} />
          </div>
        )}
        {/* Send Button */}
        <button
          onClick={handleSendText}
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          title="Send message"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
};
