package com.xsis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.xsis.service.BarangService;
import com.xsis.model.Barang;

@Controller
public class BarangController {

	@Autowired
	private BarangService brngsr;
	
	
	@RequestMapping("/barang")
	public String barang() {
		return("barang/barang");
	}
	
	@RequestMapping("/listbarang")
	public String listbarang(Model mdl) {
		
		List<Barang> Barangs = brngsr.listall();
		mdl.addAttribute("keybarang", Barangs);
		return("barang/listbarang");
	}
	
	@RequestMapping("/newbarang")
	public String newbarang(Model mdl) {
		Barang barang = new Barang();
		mdl.addAttribute("barang", barang);
		return("barang/newbarang");
	}
}
