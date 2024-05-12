using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Refit;
using ShoppingList.Contract.Request;

namespace ShoppingList.ApiClients
{
    public interface IShoppingApiClient
    {
        [Post("/shoppingitems")]
        Task<int> CreateShoppingItem(CreateShoppingItemRequest shoppingItem);
    }
}
