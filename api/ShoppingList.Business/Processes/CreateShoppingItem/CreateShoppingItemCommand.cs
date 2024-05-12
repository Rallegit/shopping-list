using ShoppingList.Contract.Request;
using MediatR;

namespace ShoppingList.Business.Processes.CreateShoppingItem
{
    public record CreateShoppingItemCommand(CreateShoppingItemRequest ShoppingItem) : IRequest<int> { }
}
