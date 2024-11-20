from rest_framework import viewsets
from .serializer import *
from .models import *


# Create your views here.


class ClienteView(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()


class ProveedorView(viewsets.ModelViewSet):
    serializer_class = ProveedorSerializer
    queryset = Proveedor.objects.all()

class ProductoView(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()




class MenuView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Menu.objects.all()


class CarritoView(viewsets.ModelViewSet):
    serializer_class = CarritoSerializer
    queryset = Carrito.objects.all()


class TipoPagoView(viewsets.ModelViewSet):
    serializer_class = TipoPagoSerializer
    queryset = TipoPago.objects.all()


class VentaView(viewsets.ModelViewSet):
    serializer_class = MenuSerializer
    queryset = Venta.objects.all()

class MesaView(viewsets.ModelViewSet):
    serializer_class = MesaSerializer
    queryset = Mesa.objects.all()

class ReservaView(viewsets.ModelViewSet):
    serializer_class = ReservaSerializer 
    queryset = Reserva.objects.all()


class SanidadView(viewsets.ModelViewSet):
    serializer_class = SanidadSerializer
    queryset = Sanidad.objects.all()
