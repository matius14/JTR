from django.db import models

# Create your models here.





class Persona(models.Model): 
    numeroCedula= models.IntegerField()
    nombres= models.CharField(max_length=50)
    apellidos= models.CharField(max_length=50)
    
    class Meta: 
        abstract = True 

class Empleado(Persona): 
    cargo= models.CharField(max_length=30)
    fecha= models.DateField()
    salario= models.IntegerField()


class Cliente(Persona): 
    telefono = models.IntegerField()
    correo = models.EmailField(max_length=30)
    direccion = models.CharField(max_length=20) 

#####################################################################################
class Proveedor(Persona): 
    direccion = models.CharField(max_length=20)
    telefono = models.IntegerField()
    tipoProductos= models.CharField(max_length=50)


class Producto(models.Model): 
    nombreProducto= models.CharField(max_length=50) 
    descripcion= models.TextField() 
    cantidad = models.IntegerField()
    categoria= models.CharField(max_length=30)
    precio = models.IntegerField()
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE) 

#####################################################################################

class Menu (models.Model): 
    nombrePlato= models.CharField(max_length=20)
    descripcion= models.TextField() 
    precio = models.IntegerField() 
    categoria= models.CharField(max_length=30)


class Carrito(models.Model): 
    items = models.IntegerField()
    cantidad = models.IntegerField()
    precio = models.IntegerField()
    menu= models.ForeignKey(Menu, on_delete=models.CASCADE)

class TipoPago(models.Model): 
    metodo= models.CharField(max_length=20)
    descripcion= models.TextField() 


class Venta(models.Model): 
    fecha= models.DateField()
    hora = models.DateTimeField()
    estado= models.BooleanField(default=False)
    carrito = models.OneToOneField(Carrito, on_delete=models.CASCADE)
    tipoPago= models.OneToOneField(TipoPago, on_delete=models.CASCADE)

    
class Mesa(models.Model): 
    numeroMesa= models.IntegerField() 
    capacidad = models.IntegerField()
    ubicacion = models.CharField(max_length=30)
    estado = models.CharField(max_length=30) 

    
class Reserva(models.Model): 
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    venta= models.OneToOneField(Venta, on_delete=models.CASCADE)
    cliente= models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Sanidad(models.Model): 
    fechaInspeccion= models.DateField()
    resultados= models.TextField() 
    comentarios= models.TextField() 





    
    