using Microsoft.AspNetCore.Mvc;

namespace ReactPresentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private static ICollection<Message> messages = new List<Message>();

        [HttpGet]
        public IEnumerable<Message> Messages()
        {
            //throw null;
            //Thread.Sleep(1000);
            return messages;
        }

        [HttpPost]
        public int AddMessage([FromBody] string text)
        {
            //HttpContext.Response.StatusCode = 500;
            //throw null;
            var ids = messages.OrderByDescending(m => m.Id).Select(m => m.Id).Take(1).ToList();
            var id = 1;
            if (ids.Count > 0)
            {
                id = ids.First() + 1;
            }
            messages.Add(new Message()
            {
                Text = text,
                Id = id,
            });
            return id;
        }

        [HttpDelete]
        public void DeleteMessage(int id)
        {
            //throw null;
            messages = messages.Where(m => m.Id != id).ToList();
        }
    }
}
