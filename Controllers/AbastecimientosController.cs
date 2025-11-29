using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TerraCafeApi.DTO;
using TerraCafeApi.Models;
using AutoMapper;

namespace TerraCafeApi.Controllers
{
    [ApiController]
    [Route("api/abastecimientos")]
    public class AbastecimientosController : ControllerBase
    {
        private readonly TerraCafeContext _context;
        private readonly IMapper _mapper;

        public AbastecimientosController(TerraCafeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AbastecimientoDTO>>> GetAll()
        {
            var lista = await _context.Abastecimientos.ToListAsync();
            return _mapper.Map<List<AbastecimientoDTO>>(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AbastecimientoDTO>> GetById(int id)
        {
            var entidad = await _context.Abastecimientos.FindAsync(id);
            if (entidad == null)
                return NotFound();

            return _mapper.Map<AbastecimientoDTO>(entidad);
        }

        [HttpPost]
        public async Task<ActionResult> Crear(AbastecimientoDTOCrear modelo)
        {
            var entidad = _mapper.Map<Abastecimiento>(modelo);

            _context.Add(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Abastecimiento registrado correctamente" });
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var entidad = await _context.Abastecimientos.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _context.Remove(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Abastecimiento eliminado correctamente" });
        }
    }
}
