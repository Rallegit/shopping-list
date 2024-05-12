using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingList.Contract;
using ShoppingList.Data;

namespace ShoppingList.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShoppingItemsController : ControllerBase
    {
        private readonly ShoppingListContext _context;

        public ShoppingItemsController(ShoppingListContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoppingItem>>> GetShoppingItems()
        {
            return await _context.ShoppingItems.ToListAsync();
        }
    }
}