class Device:
    def __init__(self, name):
        self.name = name

    def status(self):
        raise NotImplementedError