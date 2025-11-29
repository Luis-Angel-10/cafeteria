using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TerraCafeApi.DTO
{
    public class DistribuidoraDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string? Direccion { get; set; }
        public string? Telefono { get; set; }
        public string? Email { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}