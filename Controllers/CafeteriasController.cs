using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TerraCafeApi.DTO;
using TerraCafeApi.Models;
using AutoMapper;

namespace TerraCafeApi.Controllers
{
    [ApiController]
    [Route("api/cafeterias")]
    public class CafeteriasController : ControllerBase
    {
        private readonly TerraCafeContext _context;
        private readonly IMapper _mapper;

        public CafeteriasController(TerraCafeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CafeteriaDTO>>> GetAll()
        {
            var lista = await _context.Cafeterias.ToListAsync();
            return _mapper.Map<List<CafeteriaDTO>>(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CafeteriaDTO>> GetById(int id)
        {
            var entidad = await _context.Cafeterias.FindAsync(id);
            if (entidad == null)
                return NotFound();

            return _mapper.Map<CafeteriaDTO>(entidad);
        }

        [HttpPost]
        public async Task<ActionResult> Crear(CafeteriaDTOCrear modelo)
        {
            var entidad = _mapper.Map<Cafeteria>(modelo);

            _context.Add(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Cafetería creada correctamente" });
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Editar(int id, CafeteriaDTOCrear modelo)
        {
            var entidad = await _context.Cafeterias.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _mapper.Map(modelo, entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Cafetería actualizada correctamente" });
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var entidad = await _context.Cafeterias.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _context.Remove(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Cafetería eliminada correctamente" });
        }
    }
}
