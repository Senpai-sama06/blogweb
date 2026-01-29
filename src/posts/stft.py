import numpy as np
import scipy.io.wavfile as wav
import matplotlib.pyplot as plt
from scipy.fft import rfft, rfftfreq
import os

# --- Configuration ---
FS = 44100          # Sampling Rate (Hz)
DURATION = 2.0      # Duration of the chord (seconds)
OUTPUT_FOLDER = "output_assets"

# Define Note Frequencies (A Major Triad)
NOTES = {
    "A4": 440.0,
    "C#4": 554.37,
    "E4": 659.25
}

# Ensure output directory exists
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

def generate_sine(freq, duration, fs):
    """Generates a sine wave for a specific frequency and duration."""
    t = np.linspace(0, duration, int(fs * duration), endpoint=False)
    audio = 0.5 * np.sin(2 * np.pi * freq * t) 
    return audio

def save_audio(filename, audio, fs):
    """Saves numpy array as a .wav file."""
    # Convert to 16-bit PCM for standard playback
    audio_int16 = (audio * 32767).astype(np.int16)
    path = os.path.join(OUTPUT_FOLDER, filename)
    wav.write(path, fs, audio_int16)
    print(f"Saved Audio: {path}")

def plot_fft(audio, fs, title, filename):
    """Generates and saves the FFT plot."""
    N = len(audio)
    
    # Compute FFT
    yf = rfft(audio)
    xf = rfftfreq(N, 1 / fs)
    magnitude = np.abs(yf)
    
    # Plotting
    plt.figure(figsize=(10, 5))
    
    # Limit x-axis to 1000Hz (since our notes are < 700Hz) for better visibility
    max_freq_idx = np.searchsorted(xf, 1000)
    
    plt.plot(xf[:max_freq_idx], magnitude[:max_freq_idx], color='darkred')
    plt.title(f"Frequency Domain (FFT): {title}")
    plt.xlabel("Frequency (Hz)")
    plt.ylabel("Magnitude")
    plt.grid(True, alpha=0.3)
    
    # Save Plot
    save_path = os.path.join(OUTPUT_FOLDER, filename)
    plt.savefig(save_path)
    plt.close()
    print(f"Saved Plot:  {save_path}")

def main():
    print("--- Starting Generation ---")

    # 1. Generate CHORD (Simultaneous)
    # Summing all sine waves together
    chord_audio = np.zeros(int(FS * DURATION))
    for note, freq in NOTES.items():
        chord_audio += generate_sine(freq, DURATION, FS)
    
    # Normalize to prevent clipping (divide by number of notes)
    chord_audio /= len(NOTES)
    
    save_audio("chord.wav", chord_audio, FS)
    plot_fft(chord_audio, FS, "A Major Chord", "chord_fft.png")

    # 2. Generate ARPEGGIO (Sequential)
    # Concatenating sine waves one after another
    note_duration = 0.5 # Play each note for 0.5s
    arpeggio_parts = []
    for note, freq in NOTES.items():
        arpeggio_parts.append(generate_sine(freq, note_duration, FS))
    
    arpeggio_audio = np.concatenate(arpeggio_parts)
    
    save_audio("arpeggio.wav", arpeggio_audio, FS)
    plot_fft(arpeggio_audio, FS, "A Major Arpeggio", "arpeggio_fft.png")

    print("--- Done! Check the 'output_assets' folder. ---")

if __name__ == "__main__":
    main()