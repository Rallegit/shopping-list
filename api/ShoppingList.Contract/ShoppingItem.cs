namespace ShoppingList.Contract
{
    public class ShoppingItem
    {
        public bool Completed { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
    }
}
