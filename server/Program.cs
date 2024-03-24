var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

var app = builder.Build();

// Controllers
app.MapControllers();

app.Run();