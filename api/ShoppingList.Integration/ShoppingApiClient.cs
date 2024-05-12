using Refit;
using ShoppingList.ApiClients;
using ShoppingList.Contract.Request;

namespace ShoppingList.Integration
{
    public class ShoppingApiClient : IShoppingApiClient
    {
        private readonly IShoppingApiClient _client;

        public ShoppingApiClient(string baseUrl)
        {
            _client = RestService.For<IShoppingApiClient>(baseUrl);
        }

        public async Task<int> CreateShoppingItem(CreateShoppingItemRequest shoppingItem)
        {
            return await _client.CreateShoppingItem(shoppingItem);
        }
    }
}
