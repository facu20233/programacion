using Microsoft.EntityFrameworkCore;
using UsuarioApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Configurar Entity Framework Core con PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("PostgresConnection")));

// Habilitar Controladores
builder.Services.AddControllers();

// Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirFrontend",
        policy => policy.WithOrigins("http://localhost:5173") // URL del frontend
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

// Configurar Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Usar CORS
app.UseCors("PermitirFrontend");

// Configurar CSP para permitir eval() SOLO en desarrollo
if (app.Environment.IsDevelopment())
{
    app.Use(async (context, next) =>
    {
        context.Response.Headers.Append("Content-Security-Policy", "script-src 'self' 'unsafe-eval';");
        await next();
    });

    // Configuración de Swagger
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Middleware para autorización y mapeo de controladores
app.UseAuthorization();
app.MapControllers();
app.Run();
