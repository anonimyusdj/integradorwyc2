from flask import request, redirect, render_template, url_for
import socket
from app import app

app.config['SECRET_KEY']='INNGASas@as@h###23·-_-·$%2545/*'
@app.route('/')
def index():
    color="blue";
    nombre_equipo = socket.gethostname()
    direccion_equipo = socket.gethostbyname_ex(nombre_equipo)
    return render_template('home/home.html', title="InnovationSystems",color=color)

@app.route('/login')
def login():
    return render_template('login/login.html',title="InnovationSystems",color="blue");
    
@app.route('/registrar')
def registro():
     return render_template('login/registro.html',title="InnovationSystems",color="blue");
