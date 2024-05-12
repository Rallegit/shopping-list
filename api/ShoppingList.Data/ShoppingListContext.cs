using Microsoft.EntityFrameworkCore;
using ShoppingList.Contract;

namespace ShoppingList.Data
{
    public class ShoppingListContext : DbContext
    {
        public ShoppingListContext(DbContextOptions<ShoppingListContext> options) : base(options) { }

        public DbSet<ShoppingItem> ShoppingItems { get; set; }
    }
}
