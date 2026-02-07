# import numpy as np
# import scipy.io.wavfile as wav
# import matplotlib.pyplot as plt
# from scipy.fft import rfft, rfftfreq
# import os

# # --- Configuration ---
# FS = 44100          # Sampling Rate (Hz)
# DURATION = 2.0      # Duration of the chord (seconds)
# OUTPUT_FOLDER = "output_assets"

# # Define Note Frequencies (A Major Triad)
# NOTES = {
#     "A4": 440.0,
#     "C#4": 554.37,
#     "E4": 659.25
# }

# # Ensure output directory exists
# os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# def generate_sine(freq, duration, fs):
#     """Generates a sine wave for a specific frequency and duration."""
#     t = np.linspace(0, duration, int(fs * duration), endpoint=False)
#     audio = 0.5 * np.sin(2 * np.pi * freq * t) 
#     return audio

# def save_audio(filename, audio, fs):
#     """Saves numpy array as a .wav file."""
#     # Convert to 16-bit PCM for standard playback
#     audio_int16 = (audio * 32767).astype(np.int16)
#     path = os.path.join(OUTPUT_FOLDER, filename)
#     wav.write(path, fs, audio_int16)
#     print(f"Saved Audio: {path}")

# def plot_fft(audio, fs, title, filename):
#     """Generates and saves the FFT plot."""
#     N = len(audio)
    
#     # Compute FFT
#     yf = rfft(audio)
#     xf = rfftfreq(N, 1 / fs)
#     magnitude = np.abs(yf)
    
#     # Plotting
#     plt.figure(figsize=(10, 5))
    
#     # Limit x-axis to 1000Hz (since our notes are < 700Hz) for better visibility
#     max_freq_idx = np.searchsorted(xf, 1000)
    
#     plt.plot(xf[:max_freq_idx], magnitude[:max_freq_idx], color='darkred')
#     plt.title(f"Frequency Domain (FFT): {title}")
#     plt.xlabel("Frequency (Hz)")
#     plt.ylabel("Magnitude")
#     plt.grid(True, alpha=0.3)
    
#     # Save Plot
#     save_path = os.path.join(OUTPUT_FOLDER, filename)
#     plt.savefig(save_path)
#     plt.close()
#     print(f"Saved Plot:  {save_path}")

# def main():
#     print("--- Starting Generation ---")

#     # 1. Generate CHORD (Simultaneous)
#     # Summing all sine waves together
#     chord_audio = np.zeros(int(FS * DURATION))
#     for note, freq in NOTES.items():
#         chord_audio += generate_sine(freq, DURATION, FS)
    
#     # Normalize to prevent clipping (divide by number of notes)
#     chord_audio /= len(NOTES)
    
#     save_audio("chord.wav", chord_audio, FS)
#     plot_fft(chord_audio, FS, "A Major Chord", "chord_fft.png")

#     # 2. Generate ARPEGGIO (Sequential)
#     # Concatenating sine waves one after another
#     note_duration = 0.5 # Play each note for 0.5s
#     arpeggio_parts = []
#     for note, freq in NOTES.items():
#         arpeggio_parts.append(generate_sine(freq, note_duration, FS))
    
#     arpeggio_audio = np.concatenate(arpeggio_parts)
    
#     save_audio("arpeggio.wav", arpeggio_audio, FS)
#     plot_fft(arpeggio_audio, FS, "A Major Arpeggio", "arpeggio_fft.png")

#     print("--- Done! Check the 'output_assets' folder. ---")

# if __name__ == "__main__":
#     main()





## code 2


import numpy as np
import scipy.io.wavfile as wav
import matplotlib.pyplot as plt
from scipy import signal
import os

# --- Configuration ---
FS = 44100          # Sampling Rate (Hz)
DURATION = 2.0      # Duration of the signals
OUTPUT_FOLDER = "public/output_assets"

# Define Note Frequencies (A Major Triad)
NOTES = {
    "A4": 440.0,
    "C#4": 554.37,
    "E4": 659.25
}

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

def generate_sine(freq, duration, fs):
    """Generates a sine wave."""
    t = np.linspace(0, duration, int(fs * duration), endpoint=False)
    return 0.5 * np.sin(2 * np.pi * freq * t)

def save_spectrogram(audio, fs, title, filename):
    """Generates and saves a Spectrogram."""
    
    # Create the plot
    plt.figure(figsize=(10, 6))
    
    # Compute Spectrogram
    # nperseg=1024 is ~23ms window (standard for music)
    f, t, Sxx = signal.spectrogram(audio, fs, nperseg=1024, noverlap=512)
    
    # Convert amplitude to dB for better visualization (Log scale)
    # We add 1e-10 to avoid log(0)
    Sxx_db = 10 * np.log10(Sxx + 1e-10)
    
    # Plotting
    # We limit the Y-axis (Frequency) to 1000Hz because our notes are below 700Hz
    plt.pcolormesh(t, f, Sxx_db, shading='gouraud', cmap='inferno')
    plt.ylim(0, 1000)
    
    plt.ylabel('Frequency [Hz]')
    plt.xlabel('Time [sec]')
    plt.title(f"Spectrogram: {title}")
    plt.colorbar(label='Intensity (dB)')
    
    # Save
    save_path = os.path.join(OUTPUT_FOLDER, filename)
    plt.savefig(save_path)
    plt.close()
    print(f"Saved Spectrogram: {save_path}")

def save_audio(filename, audio, fs):
    """Saves audio file."""
    audio_int16 = (audio * 32767).astype(np.int16)
    wav.write(os.path.join(OUTPUT_FOLDER, filename), fs, audio_int16)

def main():
    print("--- Generating Spectrograms ---")

    # 1. Generate CHORD (Simultaneous)
    chord_audio = np.zeros(int(FS * DURATION))
    for note, freq in NOTES.items():
        chord_audio += generate_sine(freq, DURATION, FS)
    chord_audio /= len(NOTES) # Normalize
    
    save_audio("chord.wav", chord_audio, FS)
    save_spectrogram(chord_audio, FS, "A Major Chord (Simultaneous)", "chord_spectrogram.png")

    # 2. Generate ARPEGGIO (Sequential)
    note_duration = 0.5 
    arpeggio_parts = []
    for note, freq in NOTES.items():
        arpeggio_parts.append(generate_sine(freq, note_duration, FS))
    arpeggio_audio = np.concatenate(arpeggio_parts)
    
    save_audio("arpeggio.wav", arpeggio_audio, FS)
    save_spectrogram(arpeggio_audio, FS, "A Major Arpeggio (Sequential)", "arpeggio_spectrogram.png")

    print(f"--- Done! Files saved to '{OUTPUT_FOLDER}' ---")

if __name__ == "__main__":
    main()