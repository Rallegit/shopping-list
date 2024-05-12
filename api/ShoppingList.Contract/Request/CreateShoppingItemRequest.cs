namespace ShoppingList.Contract.Request
{
    public class CreateShoppingItemRequest
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public bool Completed { get; set; }
        public int Quantity { get; set; }
    }
}
