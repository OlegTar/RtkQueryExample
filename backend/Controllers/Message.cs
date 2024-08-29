using System.Text.Json.Serialization;

namespace ReactPresentation.Controllers;

public class Message
{
    public int Id { get; set; }
    [JsonPropertyName("message")]
    public string Text { get; set; }
}
