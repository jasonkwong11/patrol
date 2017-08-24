# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

d1 = Tour.create(
  title: "D1",
  description: "Dachflache West RLT Buros: Loch in Decke NSHV-NEA Schaltanlage 2: Schalter falsch eingestellt",
  creator: "Wasili Adamow"
)

f23 = Tour.create(
  title: "F23",
  description: "Dachflache West RLT Buros: Loch in Decke NSHV-NEA Schaltanlage 2: Schalter falsch eingestellt",
  creator: "Jonathan Hunt"
)

f23_tp1 = f23.tour_points.create(
  location: "Hauptgebäude Büros Dachflache Nord",
  description: "Loch in Abzugschacht",
  problem_descriptions: "WTL SCC Ost, WTL SCC West, Unresolved problem"
)

f23_tp1.tasks.create(
  problem_description: "WTL SCC Ost",
  resolved: true,
  seen: true
)

f23_tp1.tasks.create(
  problem_description: "WTL SCC West",
  resolved: true,
  seen: false
)

f23_tp1.tasks.create(
  problem_description: "Unresolved problem",
  resolved: false,
  seen: true
)

f23_tp2 = f23.tour_points.create(
  location: "Neubau Dachfläche Süd",
  description: "",
  problem_descriptions: "Abflussschacht A, Abflussschacht B"
)

f23_tp2.tasks.create(
  problem_description: "Abflussschacht A",
  resolved: true,
  seen: true
)

f23_tp2.tasks.create(
  problem_description: "Abflussschacht B",
  resolved: true,
  seen: true
)

f23_tp3 = f23.tour_points.create(
  location: "Neubau Dachfläche Nord",
  description: "",
  problem_descriptions: "Allgemeine Sichtkont, NTZ Zentralsteuerfel, Aggregatezustand, ISP"
)

f23_tp3.tasks.create(
  problem_description: "Allgemeine Sichtkont",
  resolved: true,
  seen: true
)

f23_tp3.tasks.create(
  problem_description: "NTZ Zentralsteuerfel",
  resolved: true,
  seen: true
)

f23_tp3.tasks.create(
  problem_description: "Aggregatezustand",
  resolved: true,
  seen: true
)

f23_tp3.tasks.create(
  problem_description: "ISP",
  resolved: true,
  seen: true
)

f23_tp4 = f23.tour_points.create(
  location: "NHH-Container",
  description: "",
  problem_descriptions: "Allgemeine Sichtkontrolle, Aggregatezustand"
)

f23_tp4.tasks.create(
  problem_description: "Allgemeine Sichtkontrolle",
  resolved: true,
  seen: true
)

f23_tp4.tasks.create(
  problem_description: "Aggregatezustand",
  resolved: true,
  seen: true
)

a300 = Tour.create(
  title: "A300",
  description: "Dachflache West RLT Buros: Loch in Decke NSHV-NEA Schaltanlage 2: Schalter falsch eingestellt",
  creator: "Lorenz Tormer"
)