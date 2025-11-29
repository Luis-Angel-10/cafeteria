using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TerraCafeApi.Services
{
    public interface IAlmacenamiento
    {
         Task<string> GuardarAsync(IFormFile archivo);
    }
}