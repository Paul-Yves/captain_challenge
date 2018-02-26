# Service to handle a fight
# Fighters caracs are modified by their equipment
# Fighters attack each other by order of speed
# The first one to reach 0 life loose the fight
class FightService

  def initialize(fighters)
    @fighters = fighters.sort{|a,b| a.total_speed <=> b.total_speed}
  end

  def perform
    current = @fighters[0]
    opponent = @fighters[1]
    @fighters.each{|fighter| fighter.reset_current_life}
    until victorious
      if current.attack_works(opponent.dodge_modifier)
        # an attack deals at minimum 1 damage to avoid infinite fights
        opponent.life -= [(current.strength + current.strength_modifier - opponent.toughness)  / 10, 1].max
      end
      current, opponent = opponent, current
    end
    victor_index = victorious
    winner = @fighters[victor_index]
    looser = @fighters[(victor_index+1)%2]
    Fight.create(winner: winner, looser: looser,
                 win_equipment: winner.equipments.map{|eq|eq.name}.join(', '),
                 loose_equipment: looser.equipments.map{|eq|eq.name}.join(', '))
    @fighters[victor_index]
  end

  def victorious
    return 1 if @fighters[0].life <= 0
    0 if @fighters[1].life <= 0
  end
end