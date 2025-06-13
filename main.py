import time
from sensor import TemperatureSensor, PressureSensor
from actuator import Valve, Motor
from controller import Controller

if __name__ == "__main__":
    # Crear dispositivos
    sensors = [TemperatureSensor("Temp1"), PressureSensor("Press1")]
    actuators = [Valve("Valve1"), Motor("Motor1")]

    controller = Controller(sensors, actuators)

    # Simulación en bucle
    for _ in range(5):
        print("\n📡 Ciclo de monitoreo")
        controller.status_report()
        time.sleep(2)
