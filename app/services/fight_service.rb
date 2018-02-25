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
        opponent.life -= [(current.strength + current.strength_modifier - opponent.toughness)  / 10, 0].max
      end
      current, opponent = opponent, current
    end
    victor_index = victorious
    Fight.create(winner: @fighters[victor_index], looser: @fighters[(victor_index+1)%2])
    @fighters[victor_index]
  end

  def victorious
    return 1 if @fighters[0].life <= 0
    0 if @fighters[1].life <= 0
  end
end