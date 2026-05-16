using backend.Data;
using backend.DTOs;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [ApiController]

    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ContactController(
            ApplicationDbContext context
        )
        {
            _context = context;
        }

        // GET ALL CONTACTS
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public async Task<IActionResult> GetContacts()
        {
            var contacts = await _context.Contacts
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();

            return Ok(contacts);
        }

        // CREATE CONTACT
        [HttpPost]
        public async Task<IActionResult> CreateContact(
            ContactDto dto
        )
        {
            if (
                string.IsNullOrWhiteSpace(dto.FullName) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Message)
            )
            {
                return BadRequest(new
                {
                    message = "All fields are required"
                });
            }

            var contact = new Contact
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Message = dto.Message
            };

            _context.Contacts.Add(contact);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Message Sent Successfully"
            });
        }

        // DELETE CONTACT
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(
            int id
        )
        {
            var contact = await _context.Contacts
                .FindAsync(id);

            if (contact == null)
            {
                return NotFound(new
                {
                    message = "Contact not found"
                });
            }

            _context.Contacts.Remove(contact);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Message deleted successfully"
            });
        }
    }
}