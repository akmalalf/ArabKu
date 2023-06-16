const express = require("express")
const router = express.Router()
const prayertime = require('../controller/prayertime')

// Endpoint untuk mengambil kode kota berdasarkan nama kota
router.get('/getKota', prayertime.kodeKota)
// Endpoint untuk mengambil daftar semua kota
router.get('/listKota', prayertime.allKota)
// Endpoint untuk mengambil jadwal sholat berdasarkan kota dan tanggal
router.get('/prayerTime', prayertime.prayingTime)

module.exports = router
