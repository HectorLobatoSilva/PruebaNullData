<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Empleado;
use App\Skill;

class EmpleadosController extends Controller
{
    public function index(Request $request)
    {
        return Empleado::all();
        
    }
    public function store(Request $request)
    {
        $empleado = Empleado::create([
            'email' => $request->input('email'),
            'nombre' => $request->input('nombre'),
            'puesto' => $request->input('puesto'),
            'fecha' => $request->input('fecha'),
            'domicilio' => $request->input('domicilio'),
        ]);

        // foreach($request->input('skills') as $skill)
        // {
        //     Skill::create([
        //         'nombre'=>$skill,
        //         'empleado_email'=>$empleado->email,
        //         'calificacion'=>5
        //     ]);
        // }
        
    }
    public function show(Request $request,$email)
    {
        return Empleado::where(['email'=>$email])->first();
    }
    public function update(Request $request, $email)
    {
        $empleado = Empleado::where('email',$email)->update([
            'nombre' => $request->input('nombre'),
            'puesto' => $request->input('puesto'),
            'fecha' => $request->input('fecha'),
            'domicilio' => $request->input('domicilio'),
        ]);
        
        return $empleado;
    }
    public function destroy($id)
    {
        Empleado::where('email',$email)->delete();
    }
}
