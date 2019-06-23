﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingAppAPI.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { set; get; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 ")]
        public string Password { set; get; }
    }
}
