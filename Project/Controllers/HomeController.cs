using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
// using Project.Models;

namespace Project.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    public IActionResult Index() {
        return View();
    }

    public IActionResult Iletisim() {
        return View();
    }

    public IActionResult Hizmetler() {
        return View();
    }

    public IActionResult Hakkimizda() {
        return View();
    }

    public IActionResult Hasereler() {
        return View();
    }
   
}
