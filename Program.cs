using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using TerraCafeApi.Models;  
using TerraCafeApi.Services; 

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TerraCafeContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("TerraCafe")));


builder.Services.AddHttpContextAccessor();
builder.Services.AddTransient<IAlmacenamiento, Almacenamiento>();


builder.Services.AddControllers().AddJsonOptions(options =>
{

    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});


builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "Default", policy =>
    {
        policy.WithOrigins("*")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseStaticFiles(); 
app.UseHttpsRedirection();
app.UseCors("Default");
app.UseAuthorization();

app.MapControllers();

app.Run();
