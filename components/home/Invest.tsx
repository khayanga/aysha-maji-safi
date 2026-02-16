import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FloatingBubbles } from '../WaterElemets'
import { Button } from '../ui/button'

const Invest = () => {
  return (
    <section className="relative overflow-hidden">
     
        <div className="bg-linear-to-r from-primary to-emerald-500 py-24 md:py-32 relative">
          <FloatingBubbles />
          <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
            <div className="reveal">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
                Join Our Mission
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-10">
                We're seeking impact investors who believe clean water and a plastic-free future go hand in hand. Your investment fuels real change.
              </p>

              <Link href="/invest">
                <Button
                    variant="outline"
                    className="group inline-flex items-center justify-center gap-2 rounded-md border-primary text-primary py-6 transition-all hover:scale-105"
                >
                    View Investment Opportunity
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                </Link>
            </div>
          </div>
        </div>
              
         
      </section>
  )
}

export default Invest