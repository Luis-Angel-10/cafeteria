using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TerraCafeApi.Services
{
    public class Almacenamiento : IAlmacenamiento
    {
        public async Task<string> GuardarAsync(IFormFile archivo)
        {
            // Implementación ejemplo
            var filePath = Path.Combine("wwwroot", archivo.FileName);

            using var stream = new FileStream(filePath, FileMode.Create);
            await archivo.CopyToAsync(stream);

            return filePath;
        }
    }
}