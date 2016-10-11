# aframe-iosono
Works in combination with https://github.com/krooklab/midi2iosono and an iosono system

starting the midi2iosono program and sending proper midi info to it (described in the project) the *aframe* branch of midi2iosono will send position data to aframeiosono over a websocket. This position data is then used to place up to 8 objects in the VRspace

easy, effective

over a lowlatency connection this works without noticable delay
