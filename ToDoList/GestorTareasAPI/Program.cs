// //programs.cs
using GestorTareasAPI.Data; //para ApplicationDbContext
using Microsoft.EntityFrameworkCore; //para usar PostgreSQL
using GestorTareasAPI.Controllers; //para importar el controlador si es necesario
using GestorTareasAPI.Models; // Asegúrate de que esta línea esté presente


// var builder = WebApplication.CreateBuilder(args);

// // Agregar servicios al contenedor.
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// // Configurar Entity Framework con PostgreSQL
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// // Agregar controladores (ya que usas controllers)
// builder.Services.AddControllers();

// var app = builder.Build();

// // Configurar el pipeline de solicitudes HTTP.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

// // Mapear controladores (esto es necesario para que los controladores funcionen)
// app.MapControllers();

// app.Run();


var builder = WebApplication.CreateBuilder(args);

// Configuración de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // URL del frontend
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Otros servicios
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();

var app = builder.Build();

// Aplicar la política de CORS
app.UseCors("AllowReactApp");

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
