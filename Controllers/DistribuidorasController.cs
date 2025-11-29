using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TerraCafeApi.DTO;
using TerraCafeApi.Models;
using AutoMapper;

namespace TerraCafeApi.Controllers
{
    [ApiController]
    [Route("api/Distribuidoras")]
    public class DistribuidorasController : ControllerBase
    {
        private readonly TerraCafeContext _context;
        private readonly IMapper _mapper;

        public DistribuidorasController(TerraCafeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DistribuidoraDTO>>> GetAll()
        {
            var lista = await _context.Distribuidoras.ToListAsync();
            return _mapper.Map<List<DistribuidoraDTO>>(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<DistribuidoraDTO>> GetById(int id)
        {
            var entidad = await _context.Distribuidoras.FindAsync(id);
            if (entidad == null)
                return NotFound();

            return _mapper.Map<DistribuidoraDTO>(entidad);
        }

        [HttpPost]
        public async Task<ActionResult> Crear(DistribuidoraDTOCrear modelo)
        {
            var entidad = _mapper.Map<Distribuidora>(modelo);

            _context.Add(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Distribuidora creada correctamente" });
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Editar(int id, DistribuidoraDTOCrear modelo)
        {
            var entidad = await _context.Distribuidoras.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _mapper.Map(modelo, entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Distribuidora actualizada correctamente" });
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var entidad = await _context.Distribuidoras.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _context.Remove(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Distribuidora eliminada correctamente" });
        }
    }
}
