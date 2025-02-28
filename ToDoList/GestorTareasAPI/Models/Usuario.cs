namespace GestorTareasAPI.Models;

public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;

    // Relación uno a muchos
    public List<Tarea> Tareas { get; set; } = new();
}
