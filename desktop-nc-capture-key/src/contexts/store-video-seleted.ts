
import { create } from 'zustand';

export interface VideoInfo {
  name: string;
  path: string;
  type: string;
  size: number;
  duration?: number;
}

interface VideoState {
  selectedVideo: VideoInfo | null;
  setSelectedVideo: (video: VideoInfo) => void;
  clearSelectedVideo: () => void;
}

export const useVideoStore = create<VideoState>((set) => ({
  selectedVideo: null,

  setSelectedVideo: (video) =>
    set(() => ({ selectedVideo: video })),

  clearSelectedVideo: () =>
    set(() => ({ selectedVideo: null })),
  
}));