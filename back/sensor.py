import random
from device import Device

class TemperatureSensor(Device):
    def status(self):
        return {"name": self.name, "type": "temperature", "value": round(random.uniform(20, 100), 2)}

class PressureSensor(Device):
    def status(self):
        return {"name": self.name, "type": "pressure", "value": round(random.uniform(1, 10), 2)}
