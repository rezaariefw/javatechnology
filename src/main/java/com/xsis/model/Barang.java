package com.xsis.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;


@Entity
@Table (name="barang")
public class Barang {

	@Id
	@Column(name="id", nullable=false)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "namaBarang", nullable=false, length = 50)
	private String namaBarang;
	
	@Column(name="jenisBarang", length = 30)
	private String jenisBarang;
	
	@Column(name="kotaPebuat", length = 30)
	private String kotaPembuat;
	
	@Column(name="jumlahBarang")
	private int jumlahBarang;
	
	@Column(name="hargaBarang")
	private int hargaBarang;
	
	
	
	
	

}
