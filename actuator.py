from device import Device

class Valve(Device):
    def __init__(self, name):
        super().__init__(name)
        self.open = False

    def toggle(self):
        self.open = not self.open

    def status(self):
        return {"name": self.name, "type": "valve", "state": "open" if self.open else "closed"}

class Motor(Device):
    def __init__(self, name):
        super().__init__(name)
        self.running = False

    def toggle(self):
        self.running = not self.running

    def status(self):
        return {"name": self.name, "type": "motor", "state": "running" if self.running else "stopped"}
