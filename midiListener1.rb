#use these variables, to interactveliy change desired values by slider1-4
set :slider1, 30 # used in amplitude attribute (Piano & Drum loop) to demonstrate
set :slider2, 30 # used in rate attribute (Piano & Drum loop) to demonstrate
set :slider3, 30 # used in cutoff attribute (Piano & Drum loop) to demonstrate
set :slider4, 30 # used in cutoff_attack attribute (Piano & Drum loop) to demonstrate

#values for buttons
button1 = false
button2 = false
button3 = false
button4 = false
button5 = false
button6 = false
button7 = false
button8 = false

# channels 1-5 to control different input
port1 = "/midi:loopmidi_port:0:1/note_on"
port2 = "/midi:loopmidi_port:0:2/note_on"
port3 = "/midi:loopmidi_port:0:3/note_on"
port4 = "/midi:loopmidi_port:0:4/note_on"
port5 = "/midi:loopmidi_port:0:5/note_on"

# piano loop C Major on channel 1
live_loop :piano_c_major do
  use_real_time
  note, vel = sync port1
  syn =  synth :piano, amp: get(:slider1)/ 127.0, note: note, cutoff: get(:slider3), cutoff_attack: get(:slider4)
end

# Drumm loop on channel 2
live_loop :drums do
  use_real_time
  note, vel = sync port2
  case note
  when 72 # High Tom
    sample :drum_tom_hi_soft, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 74 # Snare Drum
    sample :drum_snare_hard, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 76 # Mid Tom
    sample :drum_tom_mid_soft, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 77 # Floor Tom
    sample :drum_tom_lo_soft, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 79 # Ride Cymbal
    sample :drum_cymbal_soft, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 80 # Bass Drum
    sample :drum_bass_soft, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 81 # Crash Cymbal
    sample :drum_cymbal_open, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  when 83  # Hi hat
    sample :drum_cymbal_closed, rate: get(:slider2)/127.0+1, cutoff: get(:slider3), cutoff_attack: get(:slider4), amp: get(:slider1)/ 127.0
  end
end

#changes the slider1-4 value to input value
live_loop :slider do
  use_real_time
  n = get(:note)
  sliderNumber, value = sync port3
  if n!=0
    case sliderNumber
    when 1 # Slider 1 - change what [ 1 ,value] does
      set :slider1, value  #f.e. change the amplitude of the instruments
    when 2 # Slider 2 - change what [ 2 ,value] does
      set :slider2, value  #f.e. change the sample rate of the instruments
    when 3 # Slider 3 - change what [ 3 ,value] does
      set :slider3, value  #f.e. change the cutoff value of the instruments
    when 4 # Slider 4 - change what [ 4 ,value] does
      set :slider4, value  #f.e. change cutoff Attack of the instruments
    end
  end
end

#recieves note_on-message when button is clicked
live_loop :buttonsOn do
  use_real_time
  on, val1 =  sync "/midi:loopmidi_port:0:4/note_on"
  # switch case, that turns the button value to true with note_on
  case on
  when 1 # Button 1 - on
    button1 = true
    puts "button1", button1
  when 2 # Button 2
    button2 = true
    puts "button2", button2
  when 3 # Button 3
    button3 = true
    puts "button3", button3
  when 4 # Button 4
    button4 = true
  when 5 # Button 5
    button5 = true
  when 6 # Button 6
    button6 = true
  when 7 # Button 7
    button7 = true
  when 8 # Button 8
    button8 = true
  end
end

#recieves note_off-message when button is clicked
live_loop :buttonsOff do
  use_real_time
  # switch case, that turns the button value to false with note_off
  off, val2 =  sync "/midi:loopmidi_port:0:4/note_off"
  case off
  when 1 # Button 1 - off
    button1 = false
    puts "button1", button1
  when 2 # Button 2
    button2 = false
  when 3 # Button 3
    button3 = false
  when 4 # Button 4
    button4 = false
  when 5 # Button 5
    button5 = false
  when 6 # Button 6
    button6 = false
  when 7 # Button 7
    button7 = false
  when 8 # Button 8
    button8 = false
  end
end

#f.e. Play a simple note e4 pattern - turn on and off by button1
live_loop :simple_note do
  if (button1)
    4.times do
      play :e4, amp: 0.01, rate: 2
      sleep 0.25
    end
  else
    play :e4, amp: 0.0
  end
  sleep 1
end

#f.e. play a simple beat - turn on and off by button2
live_loop :hiphop_beat do
  if (button2)
    sample :bd_808, rate: 1, amp: 5
    sleep 1
    sample :elec_hi_snare, amp: 1
    sleep 1
    sample :bd_808, rate: 1, amp: 5
    sleep 1
    sample :elec_hi_snare, amp: 1
    sleep 1
  else
    play :e4, amp: 0.0
  end
  sleep 1
end

#f.e. play a hollow sound - turn on and off by button3
live_loop :hollow_sound do
  if (button3)
    choose = [6, 8, 10].choose
    step = choose / 2.0
    use_synth :hollow
    with_fx :hpf, cutoff: 80 do
      with_fx :reverb, room: 0.8, mix: 0.8, amp: 0.5 do
        melody = [:F4, :B4, :D4, :F5, :B5, :D5].choose
        play melody, attack: step / 3.0, release: step
      end
    end
  else
    play :e4, amp: 0.0
  end
  sleep 1
end

#f.e. play a sample from your computer - turn on and off by button4
live_loop :selfmade_samples do
  if (button5)

    # for Windows uncomment this and put the right path in to use button 5 
    #sample "D:/../../../../tAKEmEtOtHEtOP.wav", amp: 0.5


    # for Mac / raspberry pi / Linux uncomment this and put the right path in
    # sample "/../../../../tAKEmEtOtHEtOP.wav", amp: 0.5
    sleep 7
  else
    play :e4, amp: 0.0
  end
  sleep 1
end



