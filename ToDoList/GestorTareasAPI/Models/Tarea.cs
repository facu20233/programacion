namespace GestorTareasAPI.Models;

public class Tarea
{
    public int Id { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public string? Descripcion { get; set; }
    public bool Estado { get; set; }

    // Relación muchos a uno
    public int IdUsuario { get; set; }
    public Usuario? Usuario { get; set; }
}
