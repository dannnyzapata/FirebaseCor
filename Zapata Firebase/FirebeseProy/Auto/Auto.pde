import P5ireBase.library.*;
import android.os.Bundle;
import android.content.Intent;

import ketai.net.bluetooth.*;
import ketai.ui.*;
import ketai.net.*;
import ketai.camera.*;

import ketai.sensors.*;

import cassette.audiofiles.SoundFile;

KetaiSensor sensor;
PVector accelerometer;
float light, proximity = Float.POSITIVE_INFINITY;
KetaiLocation location;
double longitude, latitude, altitude;

KetaiList connectionList;
String info = "";
boolean isConfiguring = true;
String UIText;

ArrayList<String> devices = new ArrayList<String>();
boolean isWatching = false;

String[] alerta = {"", "", ""};
int currentEvent = -1;

SoundFile honk;
KetaiCamera cam;
PImage intruderPhoto = null;

P5ireBase fire;

void setup() {
  orientation(PORTRAIT);
  stroke(255);
  
  fire = new P5ireBase(this, "https://plataformasdb.firebaseio.com/");
    
  sensor = new KetaiSensor(this);
  sensor.start();
  sensor.list();
  accelerometer = new PVector();
  location = new KetaiLocation(this);

  textFont(createFont("FontsFree-Net-Proxima-Nova-Bold.otf", 64));
  honk = new SoundFile(this, "honk.mp3");
  cam = new KetaiCamera(this, 480, 480, 60);
  cam.start();
  if (cam.getNumberOfCameras() > 1)
    cam.setCameraID(1);
}

void draw() {
 background(201, 223, 236);

  int tSize = 128;
  textAlign(CENTER);
  fill(38, 174, 232);
  text(alerta);
}

void onCameraPreviewEvent() {
  cam.read();
}
