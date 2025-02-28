using GestorTareasAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GestorTareasAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Tarea> Tareas { get; set; }
}
