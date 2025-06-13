class Controller:
    def __init__(self, sensors, actuators):
        self.sensors = sensors
        self.actuators = actuators

    def poll_sensors(self):
        data = []
        for s in self.sensors:
            data.append(s.status())
        return data

    def control_logic(self, data):
        for d in data:
            if d["type"] == "temperature" and d["value"] > 70:
                print(f"⚠️ High temperature ({d['value']}°C)! Activating motor.")
                for a in self.actuators:
                    if a.__class__.__name__ == "Motor":
                        a.toggle()

            if d["type"] == "pressure" and d["value"] > 8:
                print(f"⚠️ High pressure ({d['value']} bar)! Opening valve.")
                for a in self.actuators:
                    if a.__class__.__name__ == "Valve":
                        a.toggle()

    def status_report(self):
        print("=== SENSOR DATA ===")
        sensor_data = self.poll_sensors()
        for d in sensor_data:
            print(d)

        print("=== ACTUATOR STATUS ===")
        for a in self.actuators:
            print(a.status())

        self.control_logic(sensor_data)
