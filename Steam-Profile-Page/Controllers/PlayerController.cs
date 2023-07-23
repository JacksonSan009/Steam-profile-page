using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Steam_Profile_Page.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase
{
	const string API_KEY = "27A869E3BD6354F0A9AB9AC8DD9C8C9C";
	const string API_URI = "https://api.steampowered.com";

	[HttpGet]
	[Route("getPlayerData")]
	public async Task<IActionResult> GetPlayerData(string id)
	{
		return await getPlayerSummaries(id);
	}

	public async Task<IActionResult> getPlayerSummaries(string id)
	{
		using (HttpClient http = new HttpClient())
		{
			try
			{
				http.BaseAddress = new Uri(API_URI);
				var response = await http.GetAsync($"/ISteamUser/GetPlayerSummaries/v0002/?key={API_KEY}&steamids={id}");
				response.EnsureSuccessStatusCode();

				string result = await response.Content.ReadAsStringAsync();
				// string json = JsonSerializer.Serialize(result);

				return Ok(result);
			}
			catch (HttpRequestException ex)
			{
				return BadRequest($"Error getting user {id}: {ex.Message}");
			}
		}
	}
}
