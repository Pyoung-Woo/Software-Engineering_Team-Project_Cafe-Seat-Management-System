
const int button1Pin = 2;  
const int ledPin =  13;


void setup()
{
  pinMode(button1Pin, INPUT);

  pinMode(ledPin, OUTPUT);  

  Serial.begin(9600);
}
void loop()
{
  int button1State;     
  
  button1State = digitalRead(button1Pin);
  if(button1State == HIGH) {         
    digitalWrite (ledPin, HIGH);    
    Serial.println("1");
    
  } else {                          
    digitalWrite(ledPin, LOW); 
    Serial.println("off");
  }
  delay(1000);
}
