using MediatR;
using ShoppingList.ApiClients;
using ShoppingList.Contract;
using ShoppingList.Contract.Request;

namespace ShoppingList.Business.Processes.CreateShoppingItem
{
    public class CreateShoppingItemCommandHandler : IRequestHandler<CreateShoppingItemCommand, int>
    {
        private readonly IShoppingApiClient _apiClient;

        public CreateShoppingItemCommandHandler(IShoppingApiClient apiClient)
        {
            _apiClient = apiClient;
        }

        public async Task<int> Handle(CreateShoppingItemCommand request, CancellationToken cancellationToken)
        {
            var createShoppingItemRequest = new CreateShoppingItemRequest
            {
                Id = request.ShoppingItem.Id,
                Name = request.ShoppingItem.Name,
                Quantity = request.ShoppingItem.Quantity,
                Completed = request.ShoppingItem.Completed
            };

            // Call the API client to create the shopping item remotely
            var newItemId = await _apiClient.CreateShoppingItem(createShoppingItemRequest);

            // Return the ID of the newly created shopping item
            return newItemId;
        }
    }
}