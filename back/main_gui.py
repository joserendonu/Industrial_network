import tkinter as tk
from PIL import Image, ImageTk
import random

# Simulación de dispositivos
devices = {
    "Temp1": {"type": "temp", "value": 25.0, "pos": (80, 70)},
    "Press1": {"type": "pressure", "value": 5.0, "pos": (300, 70)},
    "Motor1": {"type": "motor", "state": "stopped", "pos": (80, 180)},
    "Valve1": {"type": "valve", "state": "closed", "pos": (300, 180)}
}

# Actualiza datos simulados
def update_devices():
    devices["Temp1"]["value"] = round(random.uniform(20, 100), 2)
    devices["Press1"]["value"] = round(random.uniform(1, 10), 2)

    if devices["Temp1"]["value"] > 70:
        devices["Motor1"]["state"] = "running"
    else:
        devices["Motor1"]["state"] = "stopped"

    if devices["Press1"]["value"] > 8:
        devices["Valve1"]["state"] = "open"
    else:
        devices["Valve1"]["state"] = "closed"

def redraw():
    update_devices()
    canvas.delete("all")
    canvas.create_image(0, 0, anchor="nw", image=bg_image)

    # Dibujar los dispositivos sobre el plano
    for name, dev in devices.items():
        x, y = dev["pos"]
        if dev["type"] == "temp":
            color = "red" if dev["value"] > 70 else "black"
            text = f"{name}: {dev['value']}°C"
        elif dev["type"] == "pressure":
            color = "red" if dev["value"] > 8 else "black"
            text = f"{name}: {dev['value']} bar"
        else:
            state = dev["state"]
            if dev["type"] == "motor":
                color = "green" if state == "running" else "gray"
            else:  # valve
                color = "blue" if state == "open" else "gray"
            text = f"{name}: {state}"
        canvas.create_text(x, y, text=text, fill=color, font=("Arial", 12, "bold"))

# Crear ventana
root = tk.Tk()
root.title("Red Industrial - Plano con Dispositivos")

# Cargar plano de fondo (debe estar en el mismo directorio que este script)
bg_img_raw = Image.open("asdf.jpg")
bg_image = ImageTk.PhotoImage(bg_img_raw)

# Crear el canvas con las dimensiones de la imagen
canvas = tk.Canvas(root, width=bg_img_raw.width, height=bg_img_raw.height)
canvas.pack()

# Botón de actualización
btn = tk.Button(root, text="Actualizar", command=redraw)
btn.pack(pady=10)

# Primer dibujo
redraw()

# Ejecutar la app
root.mainloop()
