using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TerraCafeApi.DTO;
using TerraCafeApi.Models;
using AutoMapper;

namespace TerraCafeApi.Controllers
{
    [ApiController]
    [Route("api/productos")]
    public class ProductosController : ControllerBase
    {
        private readonly TerraCafeContext _context;
        private readonly IMapper _mapper;

        public ProductosController(TerraCafeContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductoDTO>>> GetAll()
        {   
            var lista = await _context.Productos.ToListAsync();
            return _mapper.Map<List<ProductoDTO>>(lista);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductoDTO>> GetById(int id)
        {
            var entidad = await _context.Productos.FindAsync(id);
            if (entidad == null)
                return NotFound();

            return _mapper.Map<ProductoDTO>(entidad);
        }

        [HttpPost]
        public async Task<ActionResult> Crear(ProductoDTOCrear modelo)
        {
            var entidad = _mapper.Map<Producto>(modelo);

            _context.Add(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Producto creado correctamente" });
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Editar(int id, ProductoDTOCrear modelo)
        {
            var entidad = await _context.Productos.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _mapper.Map(modelo, entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Producto actualizado correctamente" });
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Eliminar(int id)
        {
            var entidad = await _context.Productos.FindAsync(id);
            if (entidad == null)
                return NotFound();

            _context.Remove(entidad);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Producto eliminado correctamente" });
        }
    }
}
